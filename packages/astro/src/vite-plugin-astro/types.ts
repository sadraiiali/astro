import type { TransformResult } from '@astrojs/compiler';
import type { AstroConfig } from '../@types/astro';

export interface PluginMetadata {
	astro: {
		hydratedComponents: TransformResult['hydratedComponents'];
		clientOnlyComponents: TransformResult['clientOnlyComponents'];
		scripts: TransformResult['scripts'];
		output?: Omit<AstroConfig['output'], 'hybrid'>
	};
}
