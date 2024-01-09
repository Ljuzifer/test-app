const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const inchToPixel = (inch: number) => inch * 96;

const calculateSheets = (
    SheetSize: { width: number; height: number },
    BlockSize: { width: number; height: number },
    TotalBlocks: number,
) => {
    const blocksPerSheet = Math.floor(
        Math.floor(SheetSize.width / BlockSize.width) * Math.floor(SheetSize.height / BlockSize.height),
    );

    const totalSheets = Math.ceil(TotalBlocks / blocksPerSheet);

    return { blocksPerSheet, totalSheets };
};

export { generateRandomColor, inchToPixel, calculateSheets };
