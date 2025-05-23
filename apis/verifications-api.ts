/* tslint:disable */
/* eslint-disable */
/**
 * iDroit Dashboard Admin API
 *      これは[株式会社フォアー](https://www.fore-co.ltd/ja/)が開発するを使ったDecentralizd Identifiers / Verifiable Credentials(DID/VC)に関係する機能を簡単に利用するための REST API です。現在以下のユースケースをサポートしています。これは今後も拡張されていきます。     - DIDの生成:      - グループ管理機能       - (企業/プロジェクトのまとまり)ごとにユーザー、クライアント、証明書(VC)スキーマを紐付けて管理する。          詳細は以下を参照してください。     - [idroit dashboard admin UI](https://admin.idroit-dashboard.com)     - [idroit dashboard公式ホームページ]()     - [idroit dashboard操作マニュアル]()      以下は関連リンクです。     - [Universal Resolver](https://dev.uniresolver.io/)     - [W3C DID Core 1.0](https://www.w3.org/TR/did-core/)     - [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/)   
 *
 * OpenAPI spec version: 0.9.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { VerificationDto } from '../models';
import { VerificationResponseDto } from '../models';
import { VerificationsResponseDto } from '../models';
/**
 * VerificationsApi - axios parameter creator
 * @export
 */
export const VerificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * VC/VPの検証を実行します。
         * @summary VC/VP検証
         * @param {VerificationDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verificationsControllerCreate: async (body: VerificationDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling verificationsControllerCreate.');
            }
            const localVarPath = `/api/v1/verifications`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * アプリケーションが管理するVC/VP検証結果を一覧として値を返します。
         * @summary VC/VP検証結果一覧取得
         * @param {number} [page] (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
         * @param {number} [limit] (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
         * @param {string} [label] (任意) 例: \&quot;verification-for-project1\&quot;
         * @param {boolean} [result] (任意) 例: true
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verificationsControllerFindAll: async (page?: number, limit?: number, label?: string, result?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/verifications`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (label !== undefined) {
                localVarQueryParameter['label'] = label;
            }

            if (result !== undefined) {
                localVarQueryParameter['result'] = result;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * リクエストパラメータのidで指定された単一のVC/VP検証結果の詳細情報の値を返します。
         * @summary VC/VP検証結果詳細取得
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verificationsControllerFindOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling verificationsControllerFindOne.');
            }
            const localVarPath = `/api/v1/verifications/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VerificationsApi - functional programming interface
 * @export
 */
export const VerificationsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * VC/VPの検証を実行します。
         * @summary VC/VP検証
         * @param {VerificationDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verificationsControllerCreate(body: VerificationDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VerificationResponseDto>>> {
            const localVarAxiosArgs = await VerificationsApiAxiosParamCreator(configuration).verificationsControllerCreate(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * アプリケーションが管理するVC/VP検証結果を一覧として値を返します。
         * @summary VC/VP検証結果一覧取得
         * @param {number} [page] (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
         * @param {number} [limit] (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
         * @param {string} [label] (任意) 例: \&quot;verification-for-project1\&quot;
         * @param {boolean} [result] (任意) 例: true
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verificationsControllerFindAll(page?: number, limit?: number, label?: string, result?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VerificationsResponseDto>>> {
            const localVarAxiosArgs = await VerificationsApiAxiosParamCreator(configuration).verificationsControllerFindAll(page, limit, label, result, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * リクエストパラメータのidで指定された単一のVC/VP検証結果の詳細情報の値を返します。
         * @summary VC/VP検証結果詳細取得
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verificationsControllerFindOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VerificationResponseDto>>> {
            const localVarAxiosArgs = await VerificationsApiAxiosParamCreator(configuration).verificationsControllerFindOne(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * VerificationsApi - factory interface
 * @export
 */
export const VerificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * VC/VPの検証を実行します。
         * @summary VC/VP検証
         * @param {VerificationDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verificationsControllerCreate(body: VerificationDto, options?: AxiosRequestConfig): Promise<AxiosResponse<VerificationResponseDto>> {
            return VerificationsApiFp(configuration).verificationsControllerCreate(body, options).then((request) => request(axios, basePath));
        },
        /**
         * アプリケーションが管理するVC/VP検証結果を一覧として値を返します。
         * @summary VC/VP検証結果一覧取得
         * @param {number} [page] (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
         * @param {number} [limit] (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
         * @param {string} [label] (任意) 例: \&quot;verification-for-project1\&quot;
         * @param {boolean} [result] (任意) 例: true
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verificationsControllerFindAll(page?: number, limit?: number, label?: string, result?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<VerificationsResponseDto>> {
            return VerificationsApiFp(configuration).verificationsControllerFindAll(page, limit, label, result, options).then((request) => request(axios, basePath));
        },
        /**
         * リクエストパラメータのidで指定された単一のVC/VP検証結果の詳細情報の値を返します。
         * @summary VC/VP検証結果詳細取得
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verificationsControllerFindOne(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<VerificationResponseDto>> {
            return VerificationsApiFp(configuration).verificationsControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * VerificationsApi - object-oriented interface
 * @export
 * @class VerificationsApi
 * @extends {BaseAPI}
 */
export class VerificationsApi extends BaseAPI {
    /**
     * VC/VPの検証を実行します。
     * @summary VC/VP検証
     * @param {VerificationDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VerificationsApi
     */
    public async verificationsControllerCreate(body: VerificationDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<VerificationResponseDto>> {
        return VerificationsApiFp(this.configuration).verificationsControllerCreate(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * アプリケーションが管理するVC/VP検証結果を一覧として値を返します。
     * @summary VC/VP検証結果一覧取得
     * @param {number} [page] (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
     * @param {number} [limit] (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
     * @param {string} [label] (任意) 例: \&quot;verification-for-project1\&quot;
     * @param {boolean} [result] (任意) 例: true
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VerificationsApi
     */
    public async verificationsControllerFindAll(page?: number, limit?: number, label?: string, result?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<VerificationsResponseDto>> {
        return VerificationsApiFp(this.configuration).verificationsControllerFindAll(page, limit, label, result, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * リクエストパラメータのidで指定された単一のVC/VP検証結果の詳細情報の値を返します。
     * @summary VC/VP検証結果詳細取得
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VerificationsApi
     */
    public async verificationsControllerFindOne(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<VerificationResponseDto>> {
        return VerificationsApiFp(this.configuration).verificationsControllerFindOne(id, options).then((request) => request(this.axios, this.basePath));
    }
}
