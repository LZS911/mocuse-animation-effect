import Options from "./index.type";
declare const generateMouseEffect: ({ content, delay }: Options) => {
    initMouseEffect: () => void;
    removeMouseEffect: () => void;
};
export default generateMouseEffect;
