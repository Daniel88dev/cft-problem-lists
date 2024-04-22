type ColorType = {
  name: string;
  color: string;
  text: "white" | "black";
};

type Stages = {
  stage1: string | null;
  stage2: string | null;
  stage3: string | null;
  stage4: string | null;
  stage5: string | null;
  stage6: string | null;
  active: string;
};

export type ProjectType = {
  id: number;
  name: string;
  stages: Stages;
  colors: ColorType[];
  security: "SECURED" | "PUBLIC";
  disabled: boolean;
};
