function Hydrate(worker){
    if(!worker.dizziness){
        return worker;
    }

    worker.levelOfHydrated *= 0.1 * worker.weight * worker.experience;
    return worker;
}