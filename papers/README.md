# Trabajos sobre BOTAS

Copias listas para portafolio de los tres trabajos derivados del proyecto BOTAS,
cada uno en inglés y español.

| Archivo | Venue | Estado | Págs. |
|---|---|---|---|
| `AIS-IADIS-2026_BOTAS_full-paper_EN.pdf` | AIS 2026 (IADIS), Valencia | **Publicado** | 12 |
| `AIS-IADIS-2026_BOTAS_full-paper_ES.pdf` | AIS 2026 (IADIS), Valencia | **Publicado** | 12 |
| `CLIHC-2026_BOTAS_short-paper_EN.pdf` | CLIHC 2026, Short Papers | **Aceptado** | 5 |
| `CLIHC-2026_BOTAS_short-paper_ES.pdf` | CLIHC 2026, Short Papers | **Aceptado** | 5 |
| `IJCSIS-2026_BOTAS_journal-extendido_EN.pdf` | IADIS IJCSIS | **En preparación** | 18 |
| `IJCSIS-2026_BOTAS_journal-extendido_ES.pdf` | IADIS IJCSIS | Traducción de cortesía | 19 |

## Los trabajos

**1. Full paper, AIS 2026 (IADIS) — publicado.**
*BOTAS: A Human-Centered Natural Language Interface for GNU/Linux System
Management with Multi-Distribution Support.* Aragon Toledo, J. R. y Ruiz
Rodríguez, R. (2026). En las actas de las International Conferences on
Artificial Intelligence in Society 2026, Digital Transformation and Innovation
Management 2026 and Connected Smart Cities 2026, pp. 100–110. Valencia, España:
IADIS Press. ISBN 978-989-8704-78-8. Presentado el 25 de julio de 2026.
Seleccionado entre los mejores trabajos del congreso.

**2. Short paper, CLIHC 2026 — aceptado.**
*Toward the Evolution of the Desktop GUI: Human-Centered AI as a Paradigm for
Rethinking Operating System Interaction* / *Hacia la Evolución de la GUI
Desktop: IA Centrada en el Humano como Paradigma para Repensar la Interacción
con Sistemas Operativos.* XII Latin American Conference on Human–Computer
Interaction, pista de Artículos Cortos. Envío #21652, aceptado el 30 de marzo de
2026.

**3. Versión extendida, IADIS IJCSIS — en preparación.**
*Learned Patterns and Offline Operation in Spanish: A Human-Centered,
Multi-Distribution Natural Language Interface for GNU/Linux.* IADIS
International Journal on Computer Science and Information Systems (ISSN
1646-3692). Invitada tras la selección del full paper entre los mejores del
congreso. Extiende el trabajo de AIS 2026 en un 101 % de texto, con el nivel de
patrones aprendidos, el modo sin conexión, la validación multidistribución, un
estudio de usabilidad (n=14) y una comparación controlada (n=7). Fecha límite de
envío: 30 de septiembre de 2026. **Aún no enviada ni publicada.**

La versión en español del journal es una traducción de cortesía para lectura y
archivo: el journal acepta únicamente inglés, así que no forma parte del envío.

## Cómo se generaron estos PDF

Los de AIS y CLIHC se compilaron desde el LaTeX fuente, no desde los `.docx`.
Dos notas sobre el full paper de AIS:

- El fuente pide `apacite`, que no está instalado en este equipo; se sustituyó
  por `natbib` con estilo `abbrvnat`. Es también autor–fecha, pero el formato de
  las referencias difiere levemente del APA original.
- El fuente deja que la negrita de las etiquetas `ABSTRACT` y `KEYWORDS` se
  filtre al cuerpo del resumen. Se corrigió con `\normalfont` para que el
  resumen salga en redonda.

De la versión en español de AIS se usó `_ES_v2.tex`, la refinada, que es la que
corresponde a la camera-ready en inglés.

## `fuentes/`

Los archivos originales sin modificar de los seis documentos: `.tex`, `.bib`,
los `.docx` camera-ready enviados a IADIS, el `.docx` de la versión extendida y
`EXTENSION_REPORT.md`, que cuantifica la extensión del 101 % para los editores.
