export type TitleKind = 'movie' | 'series' | 'animated' | 'special';

export const kindLabels: Record<TitleKind, string> = {
	movie: 'Movie',
	series: 'Series',
	animated: 'Animated',
	special: 'Special'
};

export interface McuTitle {
	id: string;
	n: number;
	title: string;
	year: string;
	kind: TitleKind;
	/** Total runtime in minutes (theatrical cut, or full season / special). */
	runtime?: number;
	altUniverse?: boolean;
}

export interface McuPhase {
	id: string;
	name: string;
	upcoming?: boolean;
	titles: McuTitle[];
}

export interface McuSaga {
	id: string;
	name: string;
	symbol?: string;
	phases: McuPhase[];
}

function title(
	id: string,
	n: number,
	name: string,
	year: string,
	kind: TitleKind,
	runtime?: number,
	altUniverse = false
): McuTitle {
	return { id, n, title: name, year, kind, runtime, altUniverse };
}

export const mcuSagas: McuSaga[] = [
	{
		id: 'infinity-saga',
		name: 'The Infinity Saga',
		symbol: '∞',
		phases: [
			{
				id: 'phase-one',
				name: 'Phase One',
				titles: [
					title('iron-man', 1, 'Iron Man', '2008', 'movie', 126),
					title('incredible-hulk', 2, 'The Incredible Hulk', '2008', 'movie', 112),
					title('iron-man-2', 3, 'Iron Man 2', '2010', 'movie', 124),
					title('thor', 4, 'Thor', '2011', 'movie', 115),
					title('cap-first-avenger', 5, 'Captain America: The First Avenger', '2011', 'movie', 124),
					title('avengers', 6, 'The Avengers', '2012', 'movie', 143)
				]
			},
			{
				id: 'phase-two',
				name: 'Phase Two',
				titles: [
					title('iron-man-3', 7, 'Iron Man 3', '2013', 'movie', 130),
					title('thor-dark-world', 8, 'Thor: The Dark World', '2013', 'movie', 112),
					title('cap-winter-soldier', 9, 'Captain America: The Winter Soldier', '2014', 'movie', 136),
					title('gotg', 10, 'Guardians of the Galaxy', '2014', 'movie', 122),
					title('age-of-ultron', 11, 'Avengers: Age of Ultron', '2015', 'movie', 141),
					title('ant-man', 12, 'Ant-Man', '2015', 'movie', 117)
				]
			},
			{
				id: 'phase-three',
				name: 'Phase Three',
				titles: [
					title('civil-war', 13, 'Captain America: Civil War', '2016', 'movie', 147),
					title('doctor-strange', 14, 'Doctor Strange', '2016', 'movie', 115),
					title('gotg-2', 15, 'Guardians of the Galaxy Vol. 2', '2017', 'movie', 136),
					title('homecoming', 16, 'Spider-Man: Homecoming', '2017', 'movie', 133),
					title('ragnarok', 17, 'Thor: Ragnarok', '2017', 'movie', 130),
					title('black-panther', 18, 'Black Panther', '2018', 'movie', 134),
					title('infinity-war', 19, 'Avengers: Infinity War', '2018', 'movie', 149),
					title('ant-man-wasp', 20, 'Ant-Man and the Wasp', '2018', 'movie', 118),
					title('captain-marvel', 21, 'Captain Marvel', '2019', 'movie', 124),
					title('endgame', 22, 'Avengers: Endgame', '2019', 'movie', 181),
					title('far-from-home', 23, 'Spider-Man: Far From Home', '2019', 'movie', 129)
				]
			}
		]
	},
	{
		id: 'multiverse-saga',
		name: 'The Multiverse Saga',
		phases: [
			{
				id: 'phase-four',
				name: 'Phase Four',
				titles: [
					title('wandavision', 24, 'WandaVision', '2021', 'series', 363),
					title('fatws', 25, 'The Falcon and the Winter Soldier', '2021', 'series', 330),
					title('loki-1', 26, 'Loki — Season 1', '2021', 'series', 302),
					title('black-widow', 27, 'Black Widow', '2021', 'movie', 134),
					title('what-if-1', 28, 'What If...? — Season 1', '2021', 'animated', 322),
					title('shang-chi', 29, 'Shang-Chi and the Legend of the Ten Rings', '2021', 'movie', 132),
					title('eternals', 30, 'Eternals', '2021', 'movie', 156),
					title('hawkeye', 31, 'Hawkeye', '2021', 'series', 297),
					title('no-way-home', 32, 'Spider-Man: No Way Home', '2021', 'movie', 148),
					title('moon-knight', 33, 'Moon Knight', '2022', 'series', 303),
					title('multiverse-of-madness', 34, 'Doctor Strange in the Multiverse of Madness', '2022', 'movie', 126),
					title('ms-marvel', 35, 'Ms. Marvel', '2022', 'series', 289),
					title('love-and-thunder', 36, 'Thor: Love and Thunder', '2022', 'movie', 119),
					title('i-am-groot-1', 37, 'I Am Groot — Season 1', '2022', 'animated', 16),
					title('she-hulk', 38, 'She-Hulk: Attorney at Law', '2022', 'series', 309),
					title('werewolf-by-night', 39, 'Werewolf by Night', '2022', 'special', 52),
					title('wakanda-forever', 40, 'Black Panther: Wakanda Forever', '2022', 'movie', 161),
					title('gotg-holiday', 41, 'The Guardians of the Galaxy Holiday Special', '2022', 'special', 42)
				]
			},
			{
				id: 'phase-five',
				name: 'Phase Five',
				titles: [
					title('quantumania', 42, 'Ant-Man and the Wasp: Quantumania', '2023', 'movie', 125),
					title('gotg-3', 43, 'Guardians of the Galaxy Vol. 3', '2023', 'movie', 150),
					title('secret-invasion', 44, 'Secret Invasion', '2023', 'series', 272),
					title('i-am-groot-2', 45, 'I Am Groot — Season 2', '2023', 'animated', 15),
					title('loki-2', 46, 'Loki — Season 2', '2023', 'series', 313),
					title('the-marvels', 47, 'The Marvels', '2023', 'movie', 105),
					title('what-if-2', 48, 'What If...? — Season 2', '2023', 'animated', 292),
					title('echo', 49, 'Echo', '2024', 'series', 215),
					title('xmen-97-1', 50, "X-Men '97 — Season 1", '2024', 'animated', 344, true),
					title('deadpool-wolverine', 51, 'Deadpool & Wolverine', '2024', 'movie', 128),
					title('agatha', 52, 'Agatha All Along', '2024', 'series', 379),
					title('what-if-3', 53, 'What If...? — Season 3', '2024', 'animated', 254),
					title(
						'yfn-spiderman-1',
						54,
						'Your Friendly Neighborhood Spider-Man — Season 1',
						'2025',
						'animated',
						317,
						true
					),
					title('brave-new-world', 55, 'Captain America: Brave New World', '2025', 'movie', 118),
					title('daredevil-ba-1', 56, 'Daredevil: Born Again — Season 1', '2025', 'series', 454),
					title('thunderbolts', 57, 'Thunderbolts*', '2025', 'movie', 126),
					title('ironheart', 58, 'Ironheart', '2025', 'series', 302)
				]
			},
			{
				id: 'phase-six',
				name: 'Phase Six',
				titles: [
					title('fantastic-four', 59, 'The Fantastic Four: First Steps', '2025', 'movie', 115),
					title('eyes-of-wakanda', 60, 'Eyes of Wakanda', '2025', 'animated', 125),
					title('marvel-zombies', 61, 'Marvel Zombies — Season 1', '2025', 'animated', 125),
					title('wonder-man', 62, 'Wonder Man — Season 1', '2026', 'series', 248),
					title('daredevil-ba-2', 63, 'Daredevil: Born Again — Season 2', '2026', 'series', 389),
					title('punisher-olk', 64, 'The Punisher: One Last Kill', '2026', 'special', 51),
					title('brand-new-day', 65, 'Spider-Man: Brand New Day', '2026', 'movie', 145)
				]
			},
			{
				id: 'upcoming',
				name: 'Upcoming',
				upcoming: true,
				titles: [
					title('xmen-97-2', 66, "X-Men '97 — Season 2", '2026', 'animated', undefined, true),
					title(
						'yfn-spiderman-2',
						67,
						'Your Friendly Neighborhood Spider-Man — Season 2',
						'2026',
						'animated',
						undefined,
						true
					),
					title('visionquest', 68, 'VisionQuest', 'October 14, 2026', 'series'),
					title('doomsday', 69, 'Avengers: Doomsday', 'December 18, 2026', 'movie'),
					title('daredevil-ba-3', 70, 'Daredevil: Born Again — Season 3', '2027', 'series'),
					title('secret-wars', 71, 'Avengers: Secret Wars', 'December 17, 2027', 'movie')
				]
			}
		]
	}
];

export const mcuTitles: McuTitle[] = mcuSagas.flatMap((saga) =>
	saga.phases.flatMap((phase) => phase.titles)
);

export const mcuIds = mcuTitles.map((t) => t.id);

export const runtimeById: Record<string, number> = Object.fromEntries(
	mcuTitles.filter((t) => t.runtime != null).map((t) => [t.id, t.runtime as number])
);

export interface DoomsdayEntry {
	id: string;
	title: string;
	year: string;
	kind: TitleKind;
	runtime?: number;
	ids?: string[];
}

function fromId(id: string, overrides?: Partial<Pick<DoomsdayEntry, 'title' | 'year' | 'ids'>>): DoomsdayEntry {
	const match = mcuTitles.find((item) => item.id === id);
	if (!match) throw new Error(`Missing MCU title ${id}`);
	const ids = overrides?.ids ?? [id];
	const runtime = ids.reduce((sum, itemId) => {
		const found = mcuTitles.find((item) => item.id === itemId);
		if (!found) throw new Error(`Missing MCU title ${itemId}`);
		return sum + (found.runtime ?? 0);
	}, 0);
	return {
		id: match.id,
		title: match.title,
		year: match.year,
		kind: match.kind,
		runtime: runtime || undefined,
		...overrides
	};
}

export const doomsdayTitles: DoomsdayEntry[] = [
	{ id: 'fox-xmen', title: 'X-Men', year: '2000', kind: 'movie', runtime: 104 },
	{ id: 'fox-x2', title: 'X2', year: '2003', kind: 'movie', runtime: 134 },
	fromId('cap-first-avenger'),
	fromId('avengers'),
	fromId('infinity-war'),
	fromId('endgame'),
	fromId('loki-1', { title: 'Loki', ids: ['loki-1', 'loki-2'] }),
	fromId('shang-chi'),
	fromId('no-way-home'),
	fromId('wakanda-forever'),
	fromId('brave-new-world'),
	fromId('deadpool-wolverine'),
	fromId('multiverse-of-madness'),
	fromId('thunderbolts'),
	fromId('fantastic-four')
];

export function entryIds(entry: Pick<DoomsdayEntry, 'id' | 'ids'>): string[] {
	return entry.ids ?? [entry.id];
}

export function entryRuntime(entry: Pick<DoomsdayEntry, 'id' | 'ids' | 'runtime'>): number {
	if (entry.runtime) return entry.runtime;
	return entryIds(entry).reduce((sum, id) => sum + (runtimeById[id] ?? 0), 0);
}

export function formatDuration(minutes: number): string {
	if (minutes <= 0) return '0m';
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	if (h === 0) return `${m}m`;
	if (m === 0) return `${h}h`;
	return `${h}h ${m}m`;
}
