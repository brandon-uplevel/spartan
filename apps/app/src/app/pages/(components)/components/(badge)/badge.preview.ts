import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';

@Component({
	selector: 'spartan-badge-preview',
	imports: [HlmBadgeImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="flex w-full flex-wrap justify-center gap-2">
			<span hlmBadge>Badge</span>
			<span hlmBadge variant="secondary">Secondary</span>
			<span hlmBadge variant="destructive">Destructive</span>
			<span hlmBadge variant="outline">Outline</span>
		</div>
	`,
})
export class BadgePreview {}

export const defaultImports = `
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
`;

export const defaultSkeleton = `
<span hlmBadge variant="default | outline | secondary | destructive">Badge</span>
`;
