import { GameObject } from '../GameObject';
import { RenderableBackground } from './RenderableBackground';
import { TerrainSpec } from './TerrainSpec';
import { GameEngineAPIs } from './GameEngineAPIs';
import { AssetPool } from '../Helpers/AssetPool';

export interface Scene {
    name: string;
    loadOrder: number;
    terrainSpec: TerrainSpec;
    getSkybox(gameCanvas: HTMLCanvasElement): RenderableBackground;
    getStartingGameObjects(apis: GameEngineAPIs): GameObject[];
    getAssetPool(): Promise<AssetPool>;
}