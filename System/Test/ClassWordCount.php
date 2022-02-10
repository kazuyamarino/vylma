<?php
class ClassWordcount
{
    public function countWords($sentence)
    {
        return count(explode(" ",$sentence));
    }
}
