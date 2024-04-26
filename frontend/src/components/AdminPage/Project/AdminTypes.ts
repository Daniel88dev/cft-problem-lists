export type ColorType = {
  name: string | null;
  color: string | null;
  text: "white" | "black";
  id: number;
};

export type StagesType = {
  stage1: string | null;
  stage2: string | null;
  stage3: string | null;
  stage4: string | null;
  stage5: string | null;
  stage6: string | null;
  active: string | null;
};

export type ProjectType = {
  id: number;
  name: string;
  stages: StagesType;
  colors: ColorType[];
  security: "SECURED" | "PUBLIC";
  disabled: boolean;
};
