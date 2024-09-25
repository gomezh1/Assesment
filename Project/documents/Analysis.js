{
  "_id": "ObjectId",
  "tipo_analisis": "string",  // Ej: "prediccion_cosecha", "deteccion_enfermedades"
  "cultivo_id": "ObjectId",  // Referencia a Cultivos
  "fecha_analisis": "date",
  "resultados": "string",  // Descripción del resultado
  "recomendaciones": [
    {
      "tipo_recomendacion": "string",  // Ej: "mejora_produccion", "ajuste_precio"
      "descripcion": "string"
    }
  ]
}
