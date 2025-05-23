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

import { DidInfo } from './did-info';
import { User } from './user';
import { VcInfo } from './vc-info';
import { VcSchema } from './vc-schema';
import { VpInfo } from './vp-info';
 /**
 * 
 *
 * @export
 * @interface Group
 */
export interface Group {

    /**
     * (必須) グループの識別子
     *
     * @type {string}
     * @memberof Group
     * @example 123e4567-e89b-12d3-a456-426614174000
     */
    id: string;

    /**
     * (必須) グループの名前。(例: プロジェクト名や企業名など)
     *
     * @type {string}
     * @memberof Group
     * @example Project Group 1
     */
    name: string;

    /**
     * (必須) グループの状態(1: アクティブ, 0: 停止中)
     *
     * @type {string}
     * @memberof Group
     * @example active
     */
    status: GroupStatusEnum;

    /**
     * (任意) グループの作成目的や用途など任意で設定可能な説明文
     *
     * @type {string}
     * @memberof Group
     * @example This is Project Group 1.
     */
    description: string;

    /**
     * (任意) グループに紐付いたアカウントの配列
     *
     * @type {Array<User>}
     * @memberof Group
     */
    users?: Array<User>;

    /**
     * (必須) グループを作成したユーザーアカウント。
     *
     * @type {User}
     * @memberof Group
     */
    createdBy: User;

    /**
     * (任意) グループに紐付いたDID情報の配列
     *
     * @type {Array<DidInfo>}
     * @memberof Group
     */
    didInfos?: Array<DidInfo>;

    /**
     * (任意) グループに紐付いたVC情報の配列
     *
     * @type {Array<VcInfo>}
     * @memberof Group
     */
    vcInfos?: Array<VcInfo>;

    /**
     * (任意) グループに紐付いたVP情報の配列
     *
     * @type {Array<VpInfo>}
     * @memberof Group
     */
    vpInfos?: Array<VpInfo>;

    /**
     * (任意) グループに紐付いたVCスキーマの配列
     *
     * @type {Array<VcSchema>}
     * @memberof Group
     */
    vcSchemas?: Array<VcSchema>;

    /**
     * (必須) グループの作成日時
     *
     * @type {string}
     * @memberof Group
     * @example 2024-05-24T06:39:25.756Z
     */
    createdAt: string;

    /**
     * (必須) グループの最終更新日時
     *
     * @type {string}
     * @memberof Group
     * @example 2024-05-24T06:39:25.756Z
     */
    updatedAt: string;
}

/**
 * @export
 * @enum {string}
 */
export enum GroupStatusEnum {
    Active = 'active',
    Deactive = 'deactive'
}

