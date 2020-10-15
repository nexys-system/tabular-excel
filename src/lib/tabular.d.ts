// type definition for tabular
export interface CellStyled {
  content: string;
  style?: {
    font?: {
      bold?: boolean;
    };
  };
}

export type Cell = CellStyled | string;
