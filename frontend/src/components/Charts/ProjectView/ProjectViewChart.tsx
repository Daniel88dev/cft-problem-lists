import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { EXAMPLE_CHART_PROJECT_DATA } from "../../../Assets/CHART_EXAMPLE_DATA.tsx";
import { useEffect, useState } from "react";
import { ProblemListDataType } from "../ChartTypes.ts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type datasetsTypes = {
  label: string;
  data: number[];
  backgroundColor: string;
};

type DataType = {
  labels: string[];
  datasets: datasetsTypes[];
};

const ProjectViewChart = () => {
  const [dark, setDark] = useState<boolean>(() => {
    return document.documentElement.classList.contains("dark");
  });
  const projectData = EXAMPLE_CHART_PROJECT_DATA;

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const options = {
    plugins: {
      title: {
        display: true,
        text: projectData.projectName,
        color: dark ? "#FFFFFF" : "#000000",
      },
      tooltip: {
        bodyColor: dark ? "#FFFFFF" : "#000000",
        titleColor: dark ? "#FFFFFF" : "#000000",
      },
      legend: {
        labels: {
          color: dark ? "#FFFFFF" : "#000000",
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: dark ? "#FFFFFF" : "#000000",
        },
        stacked: true,
      },
      y: {
        ticks: {
          color: dark ? "#FFFFFF" : "#000000",
        },
        stacked: true,
      },
    },
  };

  const labels = projectData.problemLists.map(
    (project) => project.problemListName
  );

  const backgroundColors: string[] = [
    "rgb(255, 99, 132)",
    "rgb(75, 192, 192)",
    "rgb(53, 162, 235)",
    "rgb(205,53,235)",
    "rgb(95,235,53)",
  ];

  const data: DataType = {
    labels,
    datasets: projectData.categories.map((category, categoryIndex) => {
      return {
        label: category.categoryName,
        data: projectData.projectData.map(
          (list) => list.data[categoryIndex].issues
        ),
        backgroundColor: backgroundColors[categoryIndex],
      };
    }),
  };

  const subTotal = (list: ProblemListDataType) => {
    let total = 0;
    for (const item of list.data) {
      total += item.issues;
    }
    return total;
  };

  return (
    <div className={"flex-col"}>
      <div className={"min-w-64"}>
        <Bar options={options} data={data} />
      </div>
      <div className={"mt-8"}>
        <table className={"border-2 border-black dark:border-white"}>
          <thead>
            <tr className={"border-b border-black dark:border-white"}>
              <th className={"px-2"}>Category/List</th>
              {projectData.problemLists.map((list) => (
                <th
                  key={`listName${list.listId}`}
                  className={"border-l border-black dark:border-white px-2"}
                >
                  {list.problemListName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projectData.categories.map((category, index) => (
              <tr
                key={`category${category.categoryId}`}
                className={"border-b border-black dark:border-white"}
              >
                <td className={"px-2"}>{category.categoryName}</td>
                {projectData.projectData.map((list) => (
                  <td
                    key={`${category.categoryName}${list.listName}`}
                    className={"border-l border-black dark:border-white px-2"}
                  >
                    {list.data[index].issues}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td>SUB-TOTAL</td>
              {projectData.projectData.map((list) => (
                <td
                  key={`subTotal${list.listName}`}
                  className={"border-l border-black dark:border-white px-2"}
                >
                  {subTotal(list)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectViewChart;
