var GeneticAlgorithm = function () {};

GeneticAlgorithm.prototype.generate = function (length) {
    
  let chromosome = '';
  for (let i = 0; i < length; i++) {
    chromosome += Math.random() < 0.5 ? '0' : '1';
  }
  return chromosome;
};

GeneticAlgorithm.prototype.select = function (population, fitnesses) {

  const totalFitness = fitnesses.reduce((sum, f) => sum + f, 0);
  const selectOne = () => {
    const randomValue = Math.random() * totalFitness;
    let cumulativeFitness = 0;
    for (let i = 0; i < population.length; i++) {
      cumulativeFitness += fitnesses[i];
      if (cumulativeFitness >= randomValue) return population[i];
    }
    return population[population.length - 1];
  };

  return [selectOne(), selectOne()];
};

GeneticAlgorithm.prototype.mutate = function (chromosome, p) {

  let mutated = '';
  for (let i = 0; i < chromosome.length; i++) {
    if (Math.random() < p) {
      mutated += chromosome[i] === '0' ? '1' : '0';
    } else {
      mutated += chromosome[i];
    }
  }
  return mutated;
};

GeneticAlgorithm.prototype.crossover = function (chromosome1, chromosome2) {

  const length = chromosome1.length;
  const cutPoint = Math.floor(Math.random() * length);
  const child1 = chromosome1.slice(0, cutPoint) + chromosome2.slice(cutPoint);
  const child2 = chromosome2.slice(0, cutPoint) + chromosome1.slice(cutPoint);
  return [child1, child2];
};

GeneticAlgorithm.prototype.run = function (fitness, length, p_c, p_m, iterations = 100) {
  const populationSize = 100;
  let population = Array.from({ length: populationSize }, () => this.generate(length));

  for (let iter = 0; iter < iterations; iter++) {
    const fitnesses = population.map(fitness);
    const newPopulation = [];

    while (newPopulation.length < populationSize) {

      const [parent1, parent2] = this.select(population, fitnesses);

      let [child1, child2] = [parent1, parent2];
      if (Math.random() < p_c) {
        [child1, child2] = this.crossover(parent1, parent2);
      }

      child1 = this.mutate(child1, p_m);
      child2 = this.mutate(child2, p_m);

      newPopulation.push(child1);
      if (newPopulation.length < populationSize) {
        newPopulation.push(child2);
      }
    }

    population = newPopulation;
  }

  const fitnesses = population.map(fitness);
  const bestIndex = fitnesses.indexOf(Math.max(...fitnesses));
  return population[bestIndex];
};