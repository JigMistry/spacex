export class Filter {
    constructor(
        private launch_year: number = null,
        private launch_success: boolean = null,
        private land_success: boolean = null
    ) {}

    setFilter(name, value) {
        this[name] = value;
    }

    getFilter(name) {
        return this[name];
    }
}