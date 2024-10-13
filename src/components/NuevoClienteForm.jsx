"use client";

import React, { useState, useEffect, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { Input } from '../components/Input';
import { Select } from '../components/select';
import Textarea from '../components/textarea';
import { Mic, MicOff } from "lucide-react";
import Button from '../components/Button';
import MapApp from '../components/MapApp'; 

const GlobalStyle = createGlobalStyle`
  .input, .select, .textarea {
    border-width: 2px !important;
    padding: 1rem !important;
    width: 100%; /* Asegura que ocupen el 100% del ancho */
  }
`;

export default function NuevoClienteForm({ onClientAdded }) {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    numeroAlternativo: "",
    correo: "",
    ciudad: "LIMA",
    distrito: "",
    direccion: "",
    tieneMallas: "",
    clasificacion: "STANDARD",
    informacionAdicional: "",
    ubicacion: {
      lat: -12.122618, // Latitud de Miraflores por defecto
      lng: -77.029176, // Longitud de Miraflores por defecto
    },
  });

  const [isListening, setIsListening] = useState(false);
  const [currentField, setCurrentField] = useState("");
  const recognition = useRef(null);

  // Manejo del reconocimiento de voz
  useEffect(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.lang = "es-ES";

      recognition.current.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        setFormData((prev) => ({ ...prev, [currentField]: transcript }));
      };

      recognition.current.onerror = (event) => {
        console.error("Error de reconocimiento de voz:", event.error);
        setIsListening(false);
      };
    }

    return () => {
      if (recognition.current) {
        recognition.current.stop();
      }
    };
  }, [currentField]);

  const toggleListening = (field) => {
    setCurrentField(field);
    setIsListening(!isListening);
    if (!isListening) {
      recognition.current.start();
    } else {
      recognition.current.stop();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMapClick = (location) => {
    setFormData((prev) => ({ ...prev, ubicacion: location }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/guardar-cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Cliente guardado exitosamente");
        onClientAdded(formData); // Notify the CRUD component
      } else {
        alert("Error al guardar el cliente");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al guardar el cliente");
    }
  };

  const renderInput = (name, placeholder, type = "text") => (
    <div className="relative">
      <Input
        className="input pr-10"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
      />
      <button
        type="button"
        onClick={() => toggleListening(name)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
        aria-label={
          isListening && currentField === name
            ? "Detener reconocimiento de voz"
            : "Iniciar reconocimiento de voz"
        }
      >
        {isListening && currentField === name ? (
          <MicOff className="h-5 w-5" />
        ) : (
          <Mic className="h-5 w-5" />
        )}
      </button>
    </div>
  );

  return (
    <>
      <GlobalStyle />
      <form onSubmit={handleSubmit} className="w-full px-6 bg-gray-100">
        <div className="bg-purple-700 text-white p-6 mb-8">
          <h1 className="text-2xl font-bold">NUEVO CLIENTE</h1>
        </div>

        <div className="space-y-6 w-full">
          {renderInput("nombre", "Nombre del cliente")}
          {renderInput("telefono", "Teléfono del cliente")}
          {renderInput("numeroAlternativo", "Número Alternativo")}
          {renderInput("correo", "Correo del cliente", "email")}
          <div className="mb-6">
            <MapApp onMapClick={handleMapClick} />
          </div>
          <select
            className="select"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
          >
            <option value="LIMA">LIMA</option>
          </select>
          {renderInput("distrito", "Distrito")}
          {renderInput("direccion", "Dirección del cliente")}

          <select
            className="select block w-full border border-gray-300 rounded-md shadow-sm"
            name="tieneMallas"
            value={formData.tieneMallas}
            onChange={handleChange}
          >
            <option value="">Tiene mallas?</option>
            <option value="no_pero_desea">No, pero desea</option>
            <option value="si_tiene">Sí tiene</option>
            <option value="no_tiene_no_desea">No tiene, no desea</option>
          </select>

          <select
            className="select block w-full border border-gray-300 rounded-md shadow-sm"
            name="clasificacion"
            value={formData.clasificacion}
            onChange={handleChange}
          >
            <option value="">Clasificación</option>
            <option value="STANDARD">STANDARD</option>
            <option value="BUENO">BUENO</option>
            <option value="SUPER RESPONSABLE">SUPER RESPONSABLE</option>
            <option value="ACEPTA TODO">ACEPTA TODO</option>
            <option value="SUPER TOP, INVIERTE">SUPER TOP, INVIERTE</option>
            <option value="INTENSO">INTENSO</option>
            <option value="CRAZY">CRAZY</option>
            <option value="SABIONDO">SABIONDO</option>
            <option value="COJINOVA">COJINOVA</option>
            <option value="RATA">RATA</option>
            <option value="CODO">CODO</option>
            <option value="CODO">NO VOLVER A ATENDER</option>
          </select>

          <div className="relative">
            <Textarea
              className="textarea pr-10"
              name="informacionAdicional"
              value={formData.informacionAdicional}
              onChange={handleChange}
              placeholder="Información Adicional"
            />
            <button
              type="button"
              onClick={() => toggleListening("informacionAdicional")}
              className="absolute right-2 top-4"
              aria-label={
                isListening && currentField === "informacionAdicional"
                  ? "Detener reconocimiento de voz"
                  : "Iniciar reconocimiento de voz"
              }
            >
              {isListening && currentField === "informacionAdicional" ? (
                <MicOff className="h-5 w-5" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 text-lg font-semibold"
          >
            AGREGAR
          </Button>
        </div>
      </form>
    </>
  );
}
