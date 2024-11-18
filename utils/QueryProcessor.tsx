export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if(query.toLowerCase().includes("your name")) {
    return (
      "Andrea"
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "18-10826" );
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
        const a = parseInt(numbers[0], 10);
        const b = parseInt(numbers[1], 10);
        return (a + b).toString();
    }
    return "Invalid query for sum";
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 3) {
        const a = parseInt(numbers[0], 10);
        const b = parseInt(numbers[1], 10);
        const c = parseInt(numbers[2], 10);
        return Math.max(a, b, c).toString();
    }
    return "Invalid query for largest number";
}


return "I'm sorry, I don't understand your query";}

