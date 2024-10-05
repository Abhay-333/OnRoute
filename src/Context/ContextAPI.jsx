import React from "react";
import { useState, createContext } from "react";

export const detailsContext = createContext();

const ContextAPI = (props) => {
  const [passengerData, setPassengerData] = useState([
    {
      personName: `Rakesh`,
      location: {
        startPoint: {
          latitude: `18.62203599102643`,
          longitude: `73.81804779485644`,
          streetName: `Yashwantrao Chavan Rd`,
        }, // Mytri Chowk / Police Station sant tukaram nagar / Yashwantrao Chavan Rd / Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411018
        destination: {
          latitude: `18.62146149010759`,
          longitude: `73.82270926602109`,
          streetName: `DYP ACS College`,
        }, // DYP ACS College
      },
    },

    {
      personName: `Divya`,
      location: {
        startPoint: {
          latitude: `18.614697381345223`,
          longitude: `73.81569310252704`,
          streetName: `Sant Tukaram Metro Station`,
        }, // Sant Tukaram Metro Station
        destination: {
          latitude: `18.62146149010759`,
          longitude: `73.82270926602109`,
          streetName: `Police Station sant tukaram nagar`,
        }, // Mytri Chowk / Police Station sant tukaram nagar
      },
    },

    {
      personName: `Abhishek`,
      location: {
        startPoint: {
          latitude: `18.632893106625946`,
          longitude: `73.82207792906064`,
          streetName: `Tapkir Chowk`,
        }, // Tapkir Chowk
        destination: {
          latitude: `18.632684303787567`,
          longitude: `73.82205452367718`,
          streetName: `Nehru Nagar Bus stop`,
        }, // Nehru Nagar Bus stop
      },
    },
    {
      personName: `Rahul`,
      location: {
        startPoint: {
          latitude: `18.620789`,
          longitude: `73.824562`,
          streetName: `DY Patil College Road`,
        }, // DY Patil College Ground
        destination: {
          latitude: `18.623456`,
          longitude: `73.821234`,
          streetName: `PCMC Link Road`,
        }, // Pimpri Chinchwad College of Engineering
      },
    },
    {
      personName: `Priya`,
      location: {
        startPoint: {
          latitude: `18.618901`,
          longitude: `73.825678`,
          streetName: `Pimpri-Chinchwad Link Road`,
        }, // Pimpri Chinchwad Municipal Corporation
        destination: {
          latitude: `18.622345`,
          longitude: `73.820987`,
          streetName: `Old Mumbai-Pune Highway`,
        }, // Akurdi Railway Station
      },
    },

    {
      personName: `Sanjay`,
      location: {
        startPoint: {
          latitude: `18.619876`,
          longitude: `73.823210`,
          streetName: `Morwadi Road`,
        }, // Pimpri Chinchwad Science Park
        destination: {
          latitude: `18.624567`,
          longitude: `73.822345`,
          streetName: `Bhakti-Shakti Chowk Road`,
        }, // Nigdi Bhakti Shakti Chowk
      },
    },
  ]);
  return (
    <detailsContext.Provider value={[passengerData, setPassengerData]}>
      {props.children}
    </detailsContext.Provider>
  );
};

export default ContextAPI;
