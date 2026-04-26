# ============================================
# NovasoundIndex – Minimal Shop Builder (Windows Safe)
# ============================================

Write-Host "Building minimal shop structure..." -ForegroundColor Cyan

# Root folders
$folders = @(
    "data",
    "pages",
    "pages\products",
    "pages\categories",
    "pages\tags",
    "components"
)

foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder | Out-Null
        Write-Host "Created folder: $folder"
    }
}

# ============================================
# JSON FILES
# ============================================

$categories = @(
    @{ slug = "karaoke"; title = "Karaoke"; description = "Instrumentals en backing tracks"; count = 0 },
    @{ slug = "world"; title = "Wereldmuziek"; description = "Genres en instrumenten uit de hele wereld"; count = 0 },
    @{ slug = "fx"; title = "Sound Effects"; description = "Whooshes, hits, ambience en meer"; count = 0 },
    @{ slug = "loops"; title = "Loops"; description = "Drumloops, melodielussen en ritmes"; count = 0 }
)

$categories | ConvertTo-Json -Depth 5 | Out-File "data/categories.json" -Encoding UTF8
Write-Host "Created: data/categories.json"

$products = @(
    @{
        id = "demo-0001"
        title = "Voorbeeld Karaoke Track"
        category = "karaoke"
        genre = "pop"
        bpm = 120
        language = "en"
        tags = @("karaoke", "instrumental", "pop")
        file = "/audio/demo/demo-track.wav"
        duration = 210
    }
)

$products | ConvertTo-Json -Depth 5 | Out-File "data/products.json" -Encoding UTF8
Write-Host "Created: data/products.json"

$tags = @(
    @{ slug = "karaoke"; title = "Karaoke" },
    @{ slug = "instrumental"; title = "Instrumental" },
    @{ slug = "pop"; title = "Pop" },
    @{ slug = "world"; title = "Wereldmuziek" },
    @{ slug = "fx"; title = "Sound Effects" }
)

$tags | ConvertTo-Json -Depth 5 | Out-File "data/tags.json" -Encoding UTF8
Write-Host "Created: data/tags.json"

# ============================================
# PAGE FILES (Windows-safe filenames)
# ============================================

# Homepage
@"
export default function Home() {
  return (
    <div>
      <h1>NovasoundIndex</h1>
      <p>Minimalistische audio shop – automatisch gegenereerd.</p>
    </div>
  );
}
"@ | Out-File "pages/index.tsx" -Encoding UTF8

# Product page
@"
export default function ProductPage() {
  return (
    <div>
      <h1>Product</h1>
      <p>Dit is een placeholder. Robots vullen dit later automatisch.</p>
    </div>
  );
}
"@ | Out-File "pages/products/_id.tsx" -Encoding UTF8

# Category page
@"
export default function CategoryPage() {
  return (
    <div>
      <h1>Categorie</h1>
      <p>Automatisch gevuld door robots.</p>
    </div>
  );
}
"@ | Out-File "pages/categories/_slug.tsx" -Encoding UTF8

# Tag page
@"
export default function TagPage() {
  return (
    <div>
      <h1>Tag</h1>
      <p>Automatisch gevuld door robots.</p>
    </div>
  );
}
"@ | Out-File "pages/tags/_slug.tsx" -Encoding UTF8

Write-Host "Minimal shop structure created successfully!" -ForegroundColor Green
