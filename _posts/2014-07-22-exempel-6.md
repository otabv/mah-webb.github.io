---
layout: blog
title: Webbpublicering HT14
category: me134a
---

# Templates

Om man vill ha ett unikt utseende på en sida (Page) behöver man skapa en, eller flera, mallar. Detta innebär att när man skapat en sida kan man direkt eller i efterhand (figure 1) välja att en specifik mall ska gälla för den valda sidan. En mall består oftast utav samma innehåll som _page.php_ (det vill säga den struktur alla sidor har från början) tillsammans med de ändringar som gör mallen unik.

En mall kan skapas på två vis. Antingen är mallen gjord för __en specifik sida__ (exempelvis din kontakt sida) eller är mallen __återanvändbar för flera sidor__ (exempelvis alla undersidor). Om mallen är specifik appliceras den automatiskt och inget val i WordPress behöver göras, om den däremot är återanvändbar behöver ett val göras. Förslagsvis arbetar man med återanvändbara mallar då det mer än ofta är så att fler än en sida behöver samma mall. En annan föredel med återanvändbara mallar är att du kan använda samma mall i flera projekt.

De två tillvägagångssätten som presenteras nedan utgår ifrån det innehåll som finns i _page.php_. Det vill säga att endast metoderna som besämmer om mallen är specifik eller återanvändbar presenteras (inte vilket innehåll man kan ha - det är upp till er själva).

En mer utförlig beskrivning finner ni [här](http://codex.wordpress.org/Page_Templates).

Samtliga mallar (filer) placeras i ert temas rotmapp (exempelvis _wp-content/themes/twentythirteen-child/_). Tänk på att filändelsen skall vara ".php".

## Specifik

En mall för __en__ sida.

Att skapa en specifik mall kan göras på ett av två vis:

1. Man skapar (döper) en fil till _page-{slug}.php_. Där _slug_ kan exempelvis vara "hem", "kontakt", osv. En _slug_ skapas automatiskt men man har möjlighet att ändra på denna själv (se figure 1 - här visas fältet i under sidans titel).
2. Man skapar (döper) en fil till _page-{id}.php_. Där _id_ är den siffra som visas i adressfältet när du besöker en sida (exempelvis kan det stå _page_id=7_ - då har sidan id = 7).

Punkt 1 rekommenderas då man även använder användarvänliga URLs.

## Återanvändbar

En mall för __flera__ sidor.

Att skapa en återanvändbar mall har inget krav på filens namn (förutsatt att ni inte gör som ovan). Utan istället är det en inledande kommentar (PHP) som bestämmer att filen är en mall och således även återanvändbar. Förslagsvis bör man dock vara konsekvent med återanvändbara mallar när det kommer till deras namn (exempelvis minmall-template.php, startsida-template.php, osv) då det underlättar fortsatt utveckling och underhåll av dessa.

För att skapa en återanvändbar mall måste filen inleda med följande kodsnutt.

{% highlight php linenos %}
<?php
/*
Template Name: My own page template
*/
{% endhighlight %}

Notera att allt efter "Template Name:" är det som bestämmer namnet på den återanvändbara mallen.

# Kodsnuttar

_Med reservation för ändringar_.

Tre senaste blogginläggen.

{% highlight php linenos %}
<?php $latest_posts = new WP_Query( 'showposts=3' ); ?>
<?php while ($latest_posts->have_posts()): $latest_posts->the_post(); ?>
<div class="box-first-page">
    <a href="<?php the_permalink() ?>" class="box-hover">
    <?php the_post_thumbnail(); ?>
    <h3><?php the_title(); ?></h3>
    <p><?php echo substr(strip_tags($post->post_content), 0, 150); ?></p>
    </a>
</div>
<?php endwhile; ?>
{% endhighlight %}
