'use client';

import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TOOL_GROUPS from '@/lib/tools';

export function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Busca global"
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] max-w-[95vw] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
        >
            <div className="relative">
                <Command.Input
                    placeholder="Buscar ferramentas (ex.: 'CPF', 'JSON', 'API')..."
                    className="w-full p-4 border-b border-gray-200 outline-none"
                    value={query}
                    onValueChange={setQuery}
                    autoFocus
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-500">
                    {navigator?.userAgent?.includes('Mac') ? '⌘K' : 'Ctrl+K'}
                </kbd>
            </div>

            <Command.List className="max-h-[400px] overflow-y-auto p-2">
                <Command.Empty className="p-4 text-center text-gray-500">
                    Nenhuma ferramenta encontrada
                </Command.Empty>

                {TOOL_GROUPS.map((group) => {
                    const filteredTools = group.tools.filter((tool) =>
                        `${tool.title} ${tool.keywords?.join(' ')}`
                            .toLowerCase()
                            .includes(query.toLowerCase())
                    );

                    if (filteredTools.length === 0) return null;

                    return (
                        <Command.Group
                            key={group.id}
                            heading={
                                <div className="flex items-center gap-2 px-2 py-2 text-xs font-medium text-gray-500 uppercase">
                                    {group.icon}
                                    {group.title}
                                </div>
                            }
                        >
                            {filteredTools.map((tool) => (
                                <Command.Item
                                    key={tool.slug}
                                    onSelect={() => {
                                        router.push(tool.href);
                                        setOpen(false);
                                    }}
                                    className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer aria-selected:bg-blue-50 aria-selected:text-blue-600"
                                >
                                    <span className="flex-1">{tool.title}</span>
                                    {tool.keywords?.length && (
                                        <span className="text-xs text-gray-400">
                                            {tool.keywords.slice(0, 2).join(', ')}
                                        </span>
                                    )}
                                </Command.Item>
                            ))}
                        </Command.Group>
                    );
                })}
            </Command.List>
        </Command.Dialog>
    );
}