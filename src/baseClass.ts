
export namespace BaseClass {
    export namespace WithApi {
        // 请求基类
        export class BaseRequest {
            // 创建者用户标识
            CreatorUID: string;
            // 登录Token
            Token: string;
            // 用户信息
            // BaseUser: User;

            constructor() { }

            // 验证
            Validate() {

            }
        }
        // 响应基类
        export class BaseResponse {
            // 响应状态
            // ResponseStatus: ResponseStatus
            // 结果标志
            DoFlag: boolean;
            // 结果信息
            DoResult: string;
            // 结果内容
            result_data: any;

            constructor() { }

            // 验证
            Validate() {

            }
        }
        // 查询请求基类
        export class BaseSearchRequest extends BaseRequest {
            // 当前页
            current_page: number;
            // 页大小
            page_size: number;
        }
        // 响应查询基类
        export class BaseSearchResponse extends BaseResponse {
            // 当前页
            current_page: number;
            // 页大小
            page_size: number;
            // 总条数
            total_row_count: number;
        }
        export class ResponseStatus {
            ErrorCode: string;
            Message: string;
            StackTrace: string;
            Errors: Array<ResponseError>;
        }
        export class ResponseError {
            ErrorCode: string;
            FieldName: string;
            Message: string;
        }
    }
}
