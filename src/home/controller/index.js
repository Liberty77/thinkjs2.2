'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }

    init(http) {
        super.init(http);
    }

    /**
     * 前置方法  方法会在具体的 Action 调用之前自动调
     * @return {Promise} []
     */
    __before() {

    }
}