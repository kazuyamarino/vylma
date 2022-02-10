<?php
use PHPUnit\Framework\TestCase;

require_once "ClassWordCount.php";

class SimpleTest extends TestCase
{
    public function testCountWords()
    {
        // Kita pakai class yang mau kita test.
        $Wc = new ClassWordCount();

        // Kita masukan parameter 4 kata, yang harusnya dapat output 4.
        $TestSentence = "My name is NSY"; // 4 Kata ..
        $WordCount = $Wc->countWords($TestSentence);

        // Kita assert equal, ekspektasi nya harus 4, jika benar berarti Wordcount berfungsi dengan baik.
        $this->assertEquals(4, $WordCount);
    }
}
