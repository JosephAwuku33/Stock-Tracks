/*
File explanation: 
This file contains the context for managing and sharing 
the inventory data between components in our application using the data 
*/
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { collection, getDocs, query, where  } from "firebase/firestore";
import { db, auth } from "../../config/firebase";


interface InventoryItem {
  id: string;
  name: string;
  price: number;
  expiry_date: string;
}

interface InventoryContextData {
  isLoading: boolean;
  inventory: InventoryItem[];
}

const InventoryContext = createContext<InventoryContextData | undefined>(
  undefined
);

export const useInventoryData = (): InventoryContextData => {
  const userId = auth.currentUser?.uid;
  const inventoryCollectionRef = collection(db, "Inventory");
  const [isLoading, setIsLoading] = useState(true);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  
  

  useEffect(() => {
    const getInventory = async () => {
      try {
        const queryDB = query(inventoryCollectionRef, where('userId', '==', userId));
        const inventoryData = await getDocs(queryDB);
        const inventoryArray = inventoryData.docs.map(
          (doc) => doc.data() as InventoryItem
        );
        setInventory(inventoryArray);
        console.log(inventoryArray);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if ( userId ){
      getInventory();
    }
  }, [userId]);

  return { isLoading, inventory };
};


export const useInventoryContext = (): InventoryContextData => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error(
      "useInventoryContext must be used within an InventoryContextProvider"
    );
  }
  return context;
};

//interface for Props
interface Props {
    children?: ReactNode
}

export const InventoryContextProvider = ({ children } : Props) => {
    const inventoryData = useInventoryData();
  
    return (
      <InventoryContext.Provider value={inventoryData}>
        {children}
      </InventoryContext.Provider>
    );
  };