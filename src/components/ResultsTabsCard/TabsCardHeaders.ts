export interface Tab {
    icon: string;
    label: string;
  }
  
  export const allTabs = [
    { icon: "", label: "Tomato" },
    { icon: "", label: "Lettuce" },
    { icon: "", label: "Cheese" },
    { icon: "", label: "Carrot" },
    { icon: "", label: "Banana" },
    { icon: "", label: "Blueberries" },
    { icon: "", label: "Champers?" }
  ];
  
  const [tomato, lettuce, cheese] = allTabs;
  export const initialTabs = [tomato, lettuce, cheese];
  
  export function getNextTab(
    tabs: Tab[]
  ): Tab | undefined {
    const existing = new Set(allTabs);
    return allTabs.find((tab) => !existing.has(tab));
  }