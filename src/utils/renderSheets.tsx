import React from "react";
import { generateRandomColor } from "./helpers";

type SheetProps = {
    key: number;
    children: React.ReactNode;
};

type BlockProps = {
    key: number;
    style: React.CSSProperties;
    children: React.ReactNode;
};

const renderSheets = (
    blocksPerSheet: number,
    totalSheets: number,
    TotalBlocks: number,
    SheetComponent: React.FC<SheetProps>,
    BlockComponent: React.FC<BlockProps>,
): React.ReactNode[] => {
    const sheets: React.ReactNode[] = [];

    for (let i = 0; i < totalSheets; i++) {
        const blocks: React.ReactNode[] = [];

        for (let j = 0; j < blocksPerSheet && i * blocksPerSheet + j < TotalBlocks; j++) {
            blocks.push(
                <BlockComponent
                    key={j}
                    style={{
                        backgroundColor: `${generateRandomColor()}`,
                    }}>
                    Block {i * blocksPerSheet + j + 1}
                </BlockComponent>,
            );
        }

        sheets.push(<SheetComponent key={i}>{blocks}</SheetComponent>);
    }

    return sheets;
};

export default renderSheets;
