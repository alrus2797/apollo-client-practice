import { ReactElement } from "react";
import { NestedKeyOf } from "./nested-keyof.type";

type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object
    ? Subset<K[attr]>
    : K[attr] extends object | null
    ? Subset<K[attr]> | null
    : K[attr] extends object | null | undefined
    ? Subset<K[attr]> | null | undefined
    : K[attr];
};

export interface Column<T extends object> {
  value: NestedKeyOf<T>;
  name: string;
  width?: number;
  align?: CanvasTextAlign;
}

interface TableProps<T extends object> {
  items: Subset<T>[];
  columns: Array<Column<T>>;
  extraColumns?: ((item: Subset<T>) => ReactElement)[];
}

const getItem = <T extends object>(obj: Subset<T>, key: string) => {
  return key
    .split(".")
    .reduce((prev, curr) => prev[curr as keyof typeof prev] ?? prev, obj);
};

export const Table = <T extends object>({
  items,
  columns,
  extraColumns,
}: TableProps<T>) => {
  const defaultColumnWidth =
    100 / (columns.length + (extraColumns?.length ?? 0));
  return (
    <table style={{ width: "100%", display: "table" }}>
      <thead>
        <tr>
          {columns.map(({ value, name, width, align }) => (
            <th
              key={`${value}`}
              style={{
                width: `${width ?? defaultColumnWidth}%`,
                textAlign: align ?? "left",
              }}
            >
              {name}
            </th>
          ))}
          {extraColumns &&
            extraColumns.map((_) => (
              <th style={{ width: defaultColumnWidth }}></th>
            ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={idx}>
            {columns.map((column, cdx) => (
              <td
                key={cdx}
                style={{
                  textAlign: column.align ?? "left",
                }}
              >{`${getItem(item, `${column.value}`)}`}</td>
            ))}
            {extraColumns &&
              extraColumns.map((extraColumn) => <td>{extraColumn(item)}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
