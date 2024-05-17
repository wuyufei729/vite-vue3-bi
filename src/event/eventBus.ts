class eventBus {
    list: { [key: string]: Array<Function> };
    constructor() {
        // 收集订阅信息,调度中心
        this.list = {};
    }

    // 订阅
    $on(name: string, fn: Function) {
        // this.list[name] = this.list[name] || [];
        this.list[name] = [];
        this.list[name].push(fn);
        // console.log('调用了订阅', this.list, name)
    }

    // 发布
    $emit(name: string, ...args: any[]) {
        if (this.list[name]) {
            this.list[name].forEach((fn: Function) => {
                fn(...args);
            });
        }
    }

    // 取消订阅
    $off(name: string) {
        if (this.list[name]) {
            delete this.list[name];
        } else {
            this.list = {}
        }
        // console.log('调用了取消订阅', this.list, name)
    }
}
export default new eventBus();