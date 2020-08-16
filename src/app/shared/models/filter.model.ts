export class Filter {
    constructor(
        public launch_year: number = null,
        public launch_success: boolean = null,
        public land_success: boolean = null
    ) {}

    setFilter(name, value) {
        this[name] = value;
    }

    getFilter(name) {
        return this[name];
    }
}