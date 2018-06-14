# @whvcse/utils

## 版本发布计划

|  版本   |   说明   |    计划发布日期    |    发布状态     |
|   ---  |    ---  |    ---    |  ---  |
| 1.0.x | API输入输出基类、拼音和中文对照表、拼音和中文对照服务 | 2018-6-14 | 已发布  |
| 1.1.x | 元数据服务引擎的ts Client | - | - |
| 未计划 | 元数据在客户端的处理帮助函数库 | - | - |

## 说明

这个模块主要是提供架构层面我们架构中特有的一些帮助。

| 命名空间 | 类 | 说明 |
| --- |     --- |   --- |
| BaseClass.WithApi | BaseRequest、BaseResponse、BaseSearchRequest、BaseSearchResponse、ResponseStatus、ResponseError | 这些类主要是作为规范，同时也作为快捷方式，供前端编程调用rest api的时候使用，一般用来继承 |
| Text | PinYin | 拼音和中文对照表 |
| Service | PinYinService | 拼音和中文的转换服务 |

## 使用方式

### 安装

```
npm install @whvcse/utils --save
```

### 引入模块

import { 你需要的模块 } from '@whvcse/ngx-utils';

例如： 
```
import { Text, BaseClass } from '@whvcse/ngx-utils';
```

### 代码示例

ts:

```
import { Component, OnInit } from '@angular/core';
import { Text, BaseClass } from '@whvcse/ngx-utils';
// import { BaseClass, Text } from '../../../modules/utils/dist';

@Component({
    selector: 'app-utils-t',
    templateUrl: './utils.component.html',
})
export class UtilsComponent implements OnInit {
    testa: string;
    result: TheResult;
    constructor() {
        this.testa = "jifnei";
        this.testa = JSON.stringify(Text.PinYin);
        this.testa = this.ABC({
            day: "s",
            CreatorUID:"CreatorUID",
            Token:"",
            Validate: Object({})
        });
        this.result = new TheResult();
        this.result.day = "day";
        this.result.CreatorUID = "userid";
        this.result.Token = "token";
        this.result.Validate = function () { }

    }

    ngOnInit(): void {

    }

    ABC(params: TheResult): string {
        return params.CreatorUID;
    }

}

export class TheResult extends BaseClass.WithApi.BaseRequest {
    day: string;
    
    constructor() {
        super();
    }
}
```

html:

```
<div>这里是自动推断类的例子：{{testa}}</div>
<div>这里是强类型化的例子：{{result.Token}}</div>
```