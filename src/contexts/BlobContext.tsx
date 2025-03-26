import React, { createContext, ReactNode, useContext, useState } from "react";
import { BlobJsonType } from "../types";
// BlobContext.tsx

interface BlobContextType {
  blob: BlobJsonType;
  updateBlob: (newData: Partial<BlobJsonType>) => void;
}

const BlobContext = createContext<BlobContextType | undefined>(undefined);

interface BlobProviderProps {
  children: ReactNode;
  blobData: BlobJsonType;
}

const BlobProvider: React.FC<BlobProviderProps> = ({ children, blobData }) => {
  const [blob, setBlob] = useState<BlobJsonType>(blobData);

  const updateBlob = (newData: Partial<BlobJsonType>) => {
    setBlob((prevBlob) => ({ ...prevBlob, ...newData }));
  };

  return (
    <BlobContext.Provider value={{ blob, updateBlob }}>
      {children}
    </BlobContext.Provider>
  );
};

const useBlobContext = (): BlobContextType => {
  const context = useContext(BlobContext);

  if (context === undefined) {
    throw new Error("useBlobContext must be used within a BlobProvider");
  }
  return context;
};

export { BlobProvider, useBlobContext };
