<script lang="ts">
    export let title: string;
    export let price: number;
    export let imageUrl: string;
    export let sizes: string[];

    const colors = [
        { value: '#000000', name: 'Black' },
        { value: '#FFFFFF', name: 'White' },
        { value: '#2563EB', name: 'Blue' },
        { value: '#DC2626', name: 'Red' },
        { value: '#16A34A', name: 'Green' }
    ];
    let selectedSize: string = '';
    let selectedColor: string = '';
</script>

<div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
    <div class="relative">
        <img src={imageUrl} alt={title} class="w-full h-64 object-cover rounded-t-lg" />
        <button class="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors">
            Quick View
        </button>
    </div>
    <div class="p-4">
        <h2 class="text-xl font-semibold">{title}</h2>
        <p class="text-gray-600 text-lg mt-2">${price}</p>

        <!-- Color Picker -->
        <div class="flex gap-2 mt-4">
            {#each colors as color}
                <button
                    class="w-8 h-8 rounded-full border-2 {selectedColor === color.value ? 'border-black' : 'border-transparent'}"
                    style="background-color: {color.value}"
                    on:click={() => (selectedColor = color.value)}
                    aria-label="Select {color.name} color"
                ></button>
            {/each}
        </div>

        <!-- Size Selector -->
        <div class="flex gap-2 mt-4">
            {#each sizes as size}
                <button
                    class="px-3 py-1 border rounded-full {selectedSize === size ? 'bg-black text-white' : 'hover:bg-gray-100'}"
                    on:click={() => (selectedSize = size)}
                >
                    {size}
                </button>
            {/each}
        </div>

        <!-- Add to Cart Button -->
        <button class="w-full mt-4 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors" on:click={() => alert(`Added ${title} to cart!`)}>
            Add to Cart
        </button>
    </div>
</div>
