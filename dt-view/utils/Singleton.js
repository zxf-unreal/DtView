export class Singleton {
    static GetInstance() {
        if (this.instance === null) {
            this.instance = new this();
        }
        return this.instance;
    }
}
Singleton.instance = null;
