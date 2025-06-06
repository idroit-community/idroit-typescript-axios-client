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
import { GetProfileResponseDto } from '../models';
import { SignInDto } from '../models';
import { SignInResponseDto } from '../models';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ログイン済みの管理者アカウントの情報を返却します。
         * @summary ログイン済みのアカウント情報取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerGetProfile: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/auth/profile`;
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
        /**
         * アカウントログインを実行し、認証結果に応じてJSON Web Tokenの値を返します。
         * @summary アカウントログインを実施
         * @param {SignInDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogin: async (body: SignInDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling authControllerLogin.');
            }
            const localVarPath = `/api/v1/auth/login`;
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
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * ログイン済みの管理者アカウントの情報を返却します。
         * @summary ログイン済みのアカウント情報取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerGetProfile(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetProfileResponseDto>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerGetProfile(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * アカウントログインを実行し、認証結果に応じてJSON Web Tokenの値を返します。
         * @summary アカウントログインを実施
         * @param {SignInDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerLogin(body: SignInDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignInResponseDto>>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerLogin(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * ログイン済みの管理者アカウントの情報を返却します。
         * @summary ログイン済みのアカウント情報取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerGetProfile(options?: AxiosRequestConfig): Promise<AxiosResponse<GetProfileResponseDto>> {
            return AuthApiFp(configuration).authControllerGetProfile(options).then((request) => request(axios, basePath));
        },
        /**
         * アカウントログインを実行し、認証結果に応じてJSON Web Tokenの値を返します。
         * @summary アカウントログインを実施
         * @param {SignInDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerLogin(body: SignInDto, options?: AxiosRequestConfig): Promise<AxiosResponse<SignInResponseDto>> {
            return AuthApiFp(configuration).authControllerLogin(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * ログイン済みの管理者アカウントの情報を返却します。
     * @summary ログイン済みのアカウント情報取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async authControllerGetProfile(options?: AxiosRequestConfig) : Promise<AxiosResponse<GetProfileResponseDto>> {
        return AuthApiFp(this.configuration).authControllerGetProfile(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * アカウントログインを実行し、認証結果に応じてJSON Web Tokenの値を返します。
     * @summary アカウントログインを実施
     * @param {SignInDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public async authControllerLogin(body: SignInDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<SignInResponseDto>> {
        return AuthApiFp(this.configuration).authControllerLogin(body, options).then((request) => request(this.axios, this.basePath));
    }
}
