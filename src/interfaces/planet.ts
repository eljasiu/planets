export default interface Planet {
    id: number,
    name: string,
    overview: string,
    internalStructure: string,
    surfaceGeology: string,
    source: string,
    stats: { name: string, value: string }[],
    color: string
}