import { createContext, useContext } from 'react';

const GeneralContext = createContext();
GeneralContext.displayName = 'Theme, Keyboard Shortcuts | Context';

const useGeneralContext = () => {
  const generalContext = useContext(GeneralContext);

  if (!generalContext) throw new Error('Missing general context!');

  return generalContext;
};

export { useGeneralContext };
export default GeneralContext;
