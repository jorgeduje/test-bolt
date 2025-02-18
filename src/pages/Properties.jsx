// src/pages/Properties.jsx
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase.from("properties").select("*");
      if (error) console.error("Error fetching properties:", error);
      else setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Propiedades en Venta</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <h2>{property.title}</h2>
            <p>Precio: ${property.price}</p>
            <p>{property.description}</p>
            <p>Dirección: {property.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Properties;
