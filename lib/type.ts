export const ogKey = [
  "title",
  "description",
  "image",
  "type",
  "siteName",
  "url",
] as const;

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];
export type Metadata = {
  [k in ArrayElement<typeof ogKey>]?: string;
};
