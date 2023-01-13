export interface Tab {
    icon: string;
    label: string;
  }
  
  export const allTabs = [
    { icon: "", label: "Profile" },
    { icon: "", label: "Releases" },
    { icon: "", label: "Events" },
    { icon: "", label: "Gallery" },
    { icon: "", label: "Social Media" },
  ];
  
  const [Profile, Releases, Events, Gallery, SocialMedia] = allTabs;
  export const initialTabs = [Profile, Releases, Events, Gallery, SocialMedia];
  
  export function getNextTab(
    tabs: Tab[]
  ): Tab | undefined {
    const existing = new Set(allTabs);
    return allTabs.find((tab) => !existing.has(tab));
  }