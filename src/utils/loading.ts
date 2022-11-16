import loading, { Options, Loading} from 'loading-cli';

class Load {
    load: null | Loading;
    constructor() {
        this.load = null;
    }

    /**
     * @param options
     * 开始loading状态
     */
    start (options: Options | string) {
        if (!this.load) {
            typeof options === 'object'
            && !options.frames
            && (options.frames = ['<', '<', '^', '^', '>', '>', '_', '_'])
            this.load = loading(options).start()
        } else {
            this.load.start((options as string));
        }
    }
    /**
     * 停止loading
     */
    stop () {
        this.load && this.load.stop();
    }

    warn (text: string) {
        this.load && this.load.warn(text);
    }
    info (text: string) {
        this.load && this.load.info(text);
    }
}

export default new Load();