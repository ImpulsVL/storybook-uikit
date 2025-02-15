import React from 'react';
import styles from './Text.module.scss';

const TextBlock: React.FC = () => {
    return (
        <section className={styles.section__typography}>
            <div className={styles.section__typographyHead}>
                <h2 className={styles.h2__headItem}>
                    Rank
                </h2>
                <h2 className={styles.h2__headItem}>
                    Size
                </h2>
                <h2 className={styles.h2__headItem}>
                    Paragraph spacing
                </h2>
            </div>
            <div className={styles.section__typographyMain}>
                <div className={styles.div__rankItems}>
                    <div className={styles.div__ItemFonth1}>
                        h1
                    </div>
                    <div className={styles.div__ItemFonth2}>
                        h2
                    </div>
                    <div className={styles.div__ItemFonth3}>
                        h3
                    </div>
                    <div className={styles.div__ItemFonth4}>
                        h4
                    </div>
                    <div className={styles.div__ItemFonth5}>
                        h5
                    </div>
                    <div className={styles.div__ItemFontp1}>
                        p1
                    </div>
                    <div className={styles.div__ItemFontp2}>
                        p2
                    </div>
                    <div className={styles.div__ItemFontp3}>
                        p3
                    </div>
                    <div className={styles.div__ItemFontp4}>
                        p4
                    </div>
                    <div className={styles.div__ItemFontp5}>
                        p5
                    </div>
                    <div className={styles.div__ItemFontp6}>
                        p6
                    </div>
                    <div className={styles.div__ItemFontp7}>
                        p7
                    </div>
                    <div className={styles.div__ItemFontp8}>
                        p8
                    </div>
                    <div className={styles.div__ItemFontp9}>
                        p9
                    </div>
                    <div className={styles.div__ItemFontp10}>
                        p10
                    </div>
                </div>
                <div className={styles.div__sizeItems}>
                    <div className={styles.div__ItemFonth1}>
                        bold 36 px
                    </div>
                    <div className={styles.div__ItemFonth2}>
                        bold 32 px
                    </div>
                    <div className={styles.div__ItemFonth3}>
                        bold 24 px
                    </div>
                    <div className={styles.div__ItemFonth4}>
                        bold 18 px
                    </div>
                    <div className={styles.div__ItemFonth5}>
                        bold 16 px
                    </div>
                    <div className={styles.div__ItemFontp1}>
                        medium 24 px
                    </div>
                    <div className={styles.div__ItemFontp2}>
                        medium 18 px
                    </div>
                    <div className={styles.div__ItemFontp3}>
                        regular 16 px
                    </div>
                    <div className={styles.div__ItemFontp4}>
                        medium 16 px
                    </div>
                    <div className={styles.div__ItemFontp5}>
                        regular 14 px
                    </div>
                    <div className={styles.div__ItemFontp6}>
                        medium 14 px
                    </div>
                    <div className={styles.div__ItemFontp7}>
                        regular 12 px
                    </div>
                    <div className={styles.div__ItemFontp8}>
                        medium 12 px
                    </div>
                    <div className={styles.div__ItemFontp9}>
                        regular 10 px
                    </div>
                    <div className={styles.div__ItemFontp10}>
                        medium 10 px
                    </div>
                </div>
                <div className={styles.div__paragraphItems}>
                    <div className={styles.div__ItemFonth1}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFonth2}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFonth3}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFonth4}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFonth5}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFontp1}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFontp2}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFontp3}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFontp4}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFontp5}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFontp6}>
                        8 px
                    </div>
                    <div className={styles.div__ItemFontp7}>
                        4 px
                    </div>
                    <div className={styles.div__ItemFontp8}>
                        4 px
                    </div>
                    <div className={styles.div__ItemFontp9}>
                        4 px
                    </div>
                    <div className={styles.div__ItemFontp10}>
                        4 px
                    </div>
                </div>
            </div>
        </section>
    );
}
export default TextBlock;