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
 * @interface GroupResponseDto
 */
export interface GroupResponseDto {

    /**
     * グループの識別子
     *
     * @type {string}
     * @memberof GroupResponseDto
     * @example 3bfc3721-eb7c-4a5b-b5ac-94d1f158911f
     */
    id: string;

    /**
     *  グループの名前
     *
     * @type {string}
     * @memberof GroupResponseDto
     * @example Group A
     */
    name: string;

    /**
     * グループの状態(1: アクティブ, 0: 停止中)
     *
     * @type {string}
     * @memberof GroupResponseDto
     * @example active
     */
    status: GroupResponseDtoStatusEnum;

    /**
     * グループの作成目的や用途など任意で設定可能な説明文
     *
     * @type {string}
     * @memberof GroupResponseDto
     * @example This is Group A for Project X.
     */
    description: string;

    /**
     * グループに紐付いたユーザーアカウントの配列
     *
     * @type {Array<User>}
     * @memberof GroupResponseDto
     * @example [{"id":"70ceb004-0550-460a-ad40-c31614bb0109","firstName":"user","lastName":"test","email":"user1@email.com","isActive":false,"createdAt":"2024-10-21T14:01:16.111Z","updatedAt":"2024-10-21T14:01:41.000Z"}]
     */
    users: Array<User>;

    /**
     * グループを作成したユーザーアカウント
     *
     * @type {User}
     * @memberof GroupResponseDto
     * @example {"id":"e8973f1a-a80f-4243-8061-144565b640f2","name":"admin","email":"admin@email.com","needActivateFlow":false,"status":"active","role":"admin","createdAt":"2025-02-04T22:32:21.343Z","updatedAt":"2025-02-04T22:32:21.343Z"}
     */
    createdBy: User;

    /**
     * グループに紐付いたVC情報の配列
     *
     * @type {Array<DidInfo>}
     * @memberof GroupResponseDto
     * @example []
     */
    didInfos: Array<DidInfo>;

    /**
     * グループに紐付いたVC情報の配列
     *
     * @type {Array<VcInfo>}
     * @memberof GroupResponseDto
     * @example []
     */
    vcInfos: Array<VcInfo>;

    /**
     * グループに紐付いたVP情報の配列
     *
     * @type {Array<VpInfo>}
     * @memberof GroupResponseDto
     * @example []
     */
    vpInfos: Array<VpInfo>;

    /**
     * グループに紐付いたVCスキーマの配列
     *
     * @type {Array<VcSchema>}
     * @memberof GroupResponseDto
     * @example []
     */
    vcSchemas: Array<VcSchema>;

    /**
     * グループの作成日時
     *
     * @type {string}
     * @memberof GroupResponseDto
     * @example 2024-05-24T06:39:54.352Z
     */
    createdAt: string;

    /**
     * グループの最終更新日時
     *
     * @type {string}
     * @memberof GroupResponseDto
     * @example 2024-05-24T06:39:54.352Z
     */
    updatedAt: string;
}

/**
 * @export
 * @enum {string}
 */
export enum GroupResponseDtoStatusEnum {
    Active = 'active',
    Deactive = 'deactive'
}

