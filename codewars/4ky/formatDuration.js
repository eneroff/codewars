function formatDuration(seconds) {
    if (seconds === 0) {
      return "now";
    }
  
    const years = Math.floor(seconds / (365 * 24 * 3600));
    seconds %= 365 * 24 * 3600;
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= 24 * 3600;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    const components = [];
    if (years > 0) components.push(`${years} year${years > 1 ? "s" : ""}`);
    if (days > 0) components.push(`${days} day${days > 1 ? "s" : ""}`);
    if (hours > 0) components.push(`${hours} hour${hours > 1 ? "s" : ""}`);
    if (minutes > 0) components.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
    if (seconds > 0) components.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
  
    if (components.length === 1) {
      return components[0];
    } else if (components.length === 2) {
      return `${components[0]} and ${components[1]}`;
    } else {
      return `${components.slice(0, -1).join(", ")} and ${components[components.length - 1]}`;
    }
  }