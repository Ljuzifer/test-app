import React from "react";
import * as SC from "../GlobalStyle";
import renderSheets from "../utils/renderSheets";
import { inchToPixel, calculateSheets } from "../utils/helpers";

const SheetSize = { width: inchToPixel(20), height: inchToPixel(40) };
const BlockSize = { width: inchToPixel(5), height: inchToPixel(7) };
const TotalBlocks = 50;

const TableOne: React.FC = () => {
    const { blocksPerSheet, totalSheets } = calculateSheets(SheetSize, BlockSize, TotalBlocks);

    return (
        <div>
            <h3>Sheet Information:</h3>
            <p>
                Sheet Size: {SheetSize.width} x {SheetSize.height} pixels
            </p>
            <p>
                Block Size: {BlockSize.width} x {BlockSize.height} pixels
            </p>
            <p>Blocks per Sheet: {blocksPerSheet}</p>
            <p>Total Sheets Needed: {totalSheets}</p>

            <h3>Sheets:</h3>
            <SC.SheetContainer>
                {renderSheets(
                    blocksPerSheet,
                    totalSheets,
                    TotalBlocks,
                    (props) => (
                        <SC.Sheet width={SheetSize.width} height={SheetSize.height} {...props} />
                    ),
                    (props) => (
                        <SC.Block width={BlockSize.width} height={BlockSize.height} {...props} />
                    ),
                )}
            </SC.SheetContainer>
        </div>
    );
};

export default TableOne;
