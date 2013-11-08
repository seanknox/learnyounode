for (var sum=0, i=2; i<process.argv.length; i++) {
  // Need to add '+' to coerce the string arguments into actual numbers
  // or do Number(string) to coerce to number
  sum += +process.argv[i]
}

console.log(sum)
