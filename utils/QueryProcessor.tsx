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

if (query.toLowerCase().includes("multiplied")) {
  const numbers = query.match(/\d+/g);
  if (numbers && numbers.length === 2) {
      const a = parseInt(numbers[0], 10);
      const b = parseInt(numbers[1], 10);
      return (a * b).toString();
  }
  return "Invalid query for sum";
}

if (query.toLowerCase().includes("square and a cube")) {
  const numbers = query.match(/\d+/g);
  if (numbers && numbers.length === 7) {
      const results = numbers.filter(num => {
          const n = parseInt(num, 10);
          const sqrt = Math.sqrt(n);
          const cbrt = Math.cbrt(n);
          return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      });
      return results.length > 0 ? results.join(", ") : "No numbers are both square and cube";
  }
  return "Invalid query for square and cube";
}

if (query.toLowerCase().includes("primes")) {
  const numbers = query.match(/\d+/g);
  if (numbers && numbers.length === 5) {
      const isPrime = (num: number) => {
          if (num <= 1) return false;
          for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) return false;
          }
          return true;
      };
      const results = numbers.filter(num => isPrime(parseInt(num, 10)));
      return results.length > 0 ? results.join(", ") : "No prime numbers found";
  }
  return "Invalid query for prime numbers";
}



return "I'm sorry, I don't understand your query";}

