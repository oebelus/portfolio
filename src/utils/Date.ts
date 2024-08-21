export const formatDate = (date: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date(date);
    return d.getDay() + " " + months[d.getMonth()] + " " + d.getFullYear();
  };