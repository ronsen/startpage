<script lang="ts">
    import type { PageServerData } from "./$types";
    import { enhance } from '$app/forms';

    export let data: PageServerData;
</script>

<div class="uppercase text-xs text-gray-100 font-bold mb-6">
    Settings
</div>

<form method="post" use:enhance>
    <div class="flex justify-between mb-3">
        Preferred search engine:

        <select bind:value={data.engine} name="engine" class="select select-bordered max-w-xs">
            <option value="BING">Bing</option>
            <option value="BRAVE">Brave</option>
            <option value="DUCKDUCKGO">DuckDuckGo</option>
            <option value="GOOGLE">Google</option>
            <option value="YAHOO">Yahoo!</option>
            <option value="YOUTUBE">YouTube</option>
        </select>
    </div>

    <div class="flex justify-end">
        <button type="submit" class="btn btn-primary">Save</button>
    </div>
</form>

<div class="absolute top-0 right-0 p-4">
	<a href="/" class="hover:text-white">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
        </svg>
	</a>
</div>